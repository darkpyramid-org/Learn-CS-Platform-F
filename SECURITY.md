# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in Manetho, please **do not** open a public GitHub issue.

Instead, please email: `security@manetho.io`

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

We will respond within 48 hours and work with you to resolve the issue.

## Security Best Practices

### For Development
- Keep dependencies updated: `npm audit` regularly
- Use environment variables for sensitive data
- Never commit secrets or API keys
- Validate all user inputs
- Use HTTPS in production

### For Deployment
- Enable security headers (configured in Vercel/nginx)
- Use Content Security Policy headers
- Enable CORS properly
- Keep Node.js updated
- Run security scans before deployment

### Security Headers Included
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: no-referrer-when-downgrade

## Dependencies

All dependencies are pinned to specific versions in `package-lock.json` to prevent unexpected updates.

Regular audits:
```bash
npm audit
npm outdated
```

## Supported Versions

| Version | Status | Support |
|---------|--------|---------|
| 1.0.x   | Current | ✅ Active |

## Security Checklist

- [ ] No secrets in code
- [ ] HTTPS enabled in production
- [ ] Security headers configured
- [ ] Dependencies audited
- [ ] Input validation implemented
- [ ] Output encoding enabled
- [ ] Authentication secure
- [ ] CORS properly configured
- [ ] Rate limiting implemented (if needed)
- [ ] Logging configured (no sensitive data)
