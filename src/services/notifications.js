export async function sendStatusNotification({ email, phone }, issue, newStatus) {
  await new Promise(r => setTimeout(r, 400));
  const to = email ? `Email: ${email}` : phone ? `SMS: ${phone}` : 'No contact';
  return {
    delivered: Boolean(email || phone),
    channel: email ? 'email' : phone ? 'sms' : 'none',
    to,
    message: `Update: "${issue.type}" at ${issue.location?.address || 'unknown location'} is now ${newStatus}.`
  };
}
