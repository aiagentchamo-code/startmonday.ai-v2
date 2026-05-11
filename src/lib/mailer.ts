import nodemailer from 'nodemailer';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function sanitizeHeader(str: string): string {
  return str.replace(/[\r\n\t]/g, '');
}

function getTransport() {
  const host = import.meta.env.SMTP_HOST;
  const port = Number(import.meta.env.SMTP_PORT ?? 587);
  const user = import.meta.env.SMTP_USER;
  const pass = import.meta.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error('Missing SMTP configuration. Set SMTP_HOST, SMTP_USER, and SMTP_PASS in your .env file.');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export const CONTACT_TO = () =>
  import.meta.env.CONTACT_EMAIL ?? 'hello@startmonday.ai';

interface ContactPayload {
  name: string;
  email: string;
  interest: string;
  message: string;
  organization?: string;
  role?: string;
}

export async function sendContactEmail(payload: ContactPayload) {
  const transport = getTransport();
  const to = CONTACT_TO();

  await transport.sendMail({
    from: `"StartMonday.AI Contact" <${import.meta.env.SMTP_USER}>`,
    to,
    replyTo: `"${sanitizeHeader(payload.name)}" <${payload.email}>`,
    subject: `New contact: ${sanitizeHeader(payload.interest)}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      payload.organization ? `Organization: ${payload.organization}` : '',
      payload.role ? `Role: ${payload.role}` : '',
      `Interest: ${payload.interest}`,
      '',
      payload.message,
    ]
      .filter(Boolean)
      .join('\n'),
    html: `
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></p>
      ${payload.organization ? `<p><strong>Organization:</strong> ${escapeHtml(payload.organization)}</p>` : ''}
      ${payload.role ? `<p><strong>Role:</strong> ${escapeHtml(payload.role)}</p>` : ''}
      <p><strong>Interest:</strong> ${escapeHtml(payload.interest)}</p>
      <hr />
      <p>${escapeHtml(payload.message).replace(/\n/g, '<br />')}</p>
    `,
  });
}

export async function sendSubscribeNotification(email: string) {
  const transport = getTransport();
  const to = CONTACT_TO();

  await transport.sendMail({
    from: `"StartMonday.AI" <${import.meta.env.SMTP_USER}>`,
    to,
    subject: `New newsletter subscriber: ${sanitizeHeader(email)}`,
    text: `A new subscriber signed up: ${email}`,
    html: `<p>A new subscriber signed up: <strong>${escapeHtml(email)}</strong></p>`,
  });
}

export async function sendSignupRecommendation(name: string, email: string) {
  const transport = getTransport();
  const to = CONTACT_TO();

  await transport.sendMail({
    from: `"StartMonday.AI" <${import.meta.env.SMTP_USER}>`,
    to,
    replyTo: `"${sanitizeHeader(name)}" <${email}>`,
    subject: `Sign-up recommendation request: ${sanitizeHeader(name)}`,
    text: `Name: ${name}\nEmail: ${email}`,
    html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>`,
  });
}

export async function sendSubscriptionConfirmation(
  name: string,
  email: string,
  planLabel: string,
  points: number,
) {
  const transport = getTransport();
  const safeName = escapeHtml(name);
  const safePlan = escapeHtml(planLabel);
  const greeting = name ? `Hi ${safeName},` : 'Hi there,';

  await transport.sendMail({
    from: `"StartMonday.AI" <${import.meta.env.SMTP_USER}>`,
    to: email,
    subject: `Welcome to StartMonday+ ${sanitizeHeader(planLabel)}`,
    text: [
      name ? `Hi ${name},` : 'Hi there,',
      '',
      `Your StartMonday+ ${planLabel} subscription is now active. You have ${points} StartPoints available this month.`,
      '',
      'To get started, book a mentoring session, join a live webinar, or request your first AI use case assessment.',
      '',
      'Questions? Reply to this email or reach us at hello@startmonday.ai.',
      '',
      'The StartMonday.AI team',
    ].join('\n'),
    html: `
      <p>${greeting}</p>
      <p>Your <strong>StartMonday+ ${safePlan}</strong> subscription is now active.</p>
      <p>You have <strong>${points} StartPoints</strong> available this month.</p>
      <p>To get started, book a mentoring session, join a live webinar, or request your first AI use case assessment.</p>
      <p>Questions? Reply to this email or reach us at <a href="mailto:hello@startmonday.ai">hello@startmonday.ai</a>.</p>
      <p>— The StartMonday.AI team</p>
    `,
  });
}

export async function sendSubscriptionInternalNotification(
  name: string,
  email: string,
  planLabel: string,
) {
  const transport = getTransport();
  const to = CONTACT_TO();

  await transport.sendMail({
    from: `"StartMonday.AI" <${import.meta.env.SMTP_USER}>`,
    to,
    subject: `New StartMonday+ subscriber — ${sanitizeHeader(planLabel)}: ${sanitizeHeader(name || email)}`,
    text: `Name: ${name}\nEmail: ${email}\nPlan: ${planLabel}`,
    html: `
      <p><strong>Name:</strong> ${escapeHtml(name) || '(not provided)'}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <p><strong>Plan:</strong> ${escapeHtml(planLabel)}</p>
    `,
  });
}

export async function sendPaymentFailedNotification(customerEmail: string) {
  const transport = getTransport();
  const to = CONTACT_TO();

  await transport.sendMail({
    from: `"StartMonday.AI" <${import.meta.env.SMTP_USER}>`,
    to,
    subject: `StartMonday+ payment failed: ${sanitizeHeader(customerEmail)}`,
    text: `A subscription payment failed for: ${customerEmail}\n\nCheck the Stripe dashboard for details.`,
    html: `<p>A subscription payment failed for: <strong>${escapeHtml(customerEmail)}</strong></p><p>Check the Stripe dashboard for details.</p>`,
  });
}

export async function sendCancellationNotification(customerEmail: string) {
  const transport = getTransport();
  const to = CONTACT_TO();

  await transport.sendMail({
    from: `"StartMonday.AI" <${import.meta.env.SMTP_USER}>`,
    to,
    subject: `StartMonday+ subscription cancelled: ${sanitizeHeader(customerEmail)}`,
    text: `Subscription cancelled for: ${customerEmail}`,
    html: `<p>Subscription cancelled for: <strong>${escapeHtml(customerEmail)}</strong></p>`,
  });
}
