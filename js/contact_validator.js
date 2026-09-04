// Client-side contact form validation helper
function validateContactForm(data) {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Form data is required' };
  }
  if (!data.email || !data.email.includes('@')) {
    return { valid: false, error: 'A valid email address is required' };
  }
  if (!data.message || data.message.trim().length < 10) {
    return { valid: false, error: 'Message must be at least 10 characters long' };
  }
  return { valid: true, error: null };
}
