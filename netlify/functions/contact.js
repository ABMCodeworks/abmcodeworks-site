import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function jsonResponse(statusCode, body) {
    return {
        statusCode,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    };
}

export async function handler(event) {
    if (event.httpMethod !== "POST") {
        return jsonResponse(405, {
            success: false,
            message: "Method not allowed.",
        });
    }

    if (!process.env.RESEND_API_KEY) {
        return jsonResponse(500, {
            success: false,
            message: "Missing RESEND_API_KEY.",
        });
    }

    try {
        const body = JSON.parse(event.body || "{}");

        const name = String(body.name || "").trim();
        const email = String(body.email || "").trim();
        const projectType = String(body.project_type || "").trim();
        const message = String(body.message || "").trim();

        if (!name || !email || !message) {
            return jsonResponse(400, {
                success: false,
                message: "Name, email and message are required.",
            });
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            return jsonResponse(400, {
                success: false,
                message: "Please enter a valid email address.",
            });
        }

        const toEmail = process.env.CONTACT_TO_EMAIL || "hello@abmcodeworks.com";
        const fromEmail =
            process.env.CONTACT_FROM_EMAIL ||
            "ABM Codeworks <admin@abmcodeworks.com>";

        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: [toEmail],
            replyTo: email,
            subject: `New ABM Codeworks enquiry from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #16243E;">
          <h2 style="color: #0B172A;">New ABM Codeworks website enquiry</h2>

          <p><strong>Name:</strong><br />${escapeHtml(name)}</p>
          <p><strong>Email:</strong><br />${escapeHtml(email)}</p>
          <p><strong>Project type:</strong><br />${escapeHtml(projectType || "Not provided")}</p>
          <p><strong>Message:</strong><br />${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
            text: `
New ABM Codeworks website enquiry

Name:
${name}

Email:
${email}

Project type:
${projectType || "Not provided"}

Message:
${message}
      `.trim(),
        });

        if (error) {
            console.error("Resend error:", error);

            return jsonResponse(500, {
                success: false,
                message: "Failed to send email.",
            });
        }

        return jsonResponse(200, {
            success: true,
            message: "Message sent successfully.",
            id: data?.id,
        });
    } catch (error) {
        console.error("Contact function error:", error);

        return jsonResponse(500, {
            success: false,
            message: "Something went wrong while sending your message.",
        });
    }
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
