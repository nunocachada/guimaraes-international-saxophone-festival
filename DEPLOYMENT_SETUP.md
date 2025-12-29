# 🚀 Automated Deployment to cPanel Setup Guide

This guide will help you set up automated deployments from GitHub to cPanel, similar to your Vercel workflow.

## 📋 Overview

When you push to GitHub, GitHub Actions will:

1. ✅ Build your Next.js app (static export)
2. ✅ Deploy the `out/` folder to your cPanel via FTP
3. ✅ Automatically update your website

## 🔧 Setup Instructions

### Step 1: Configure Next.js for Static Export

Make sure your `next.config.js` is configured for static export:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

If you haven't done this yet, you can copy the example:

```bash
cp next.config.static-export.example.js next.config.js
```

### Step 2: Get Your cPanel FTP Credentials

You'll need:

- **FTP Server/Host**: Usually `ftp.yourdomain.com` or your server IP
- **FTP Username**: Your cPanel username
- **FTP Password**: Your cPanel password or FTP password

**How to find these:**

1. Log into cPanel
2. Go to **FTP Accounts** or **File Manager**
3. Check your FTP settings
4. Or create a dedicated FTP account for deployments (recommended)

### Step 3: Add GitHub Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add these three secrets:

   | Secret Name           | Value                   | Example                                         |
   | --------------------- | ----------------------- | ----------------------------------------------- |
   | `CPANEL_FTP_SERVER`   | Your FTP server address | `ftp.yourdomain.com` or `123.456.789.0`         |
   | `CPANEL_FTP_USERNAME` | Your FTP username       | `yourusername` or `yourusername@yourdomain.com` |
   | `CPANEL_FTP_PASSWORD` | Your FTP password       | `yourpassword`                                  |

### Step 4: Verify Deployment Directory

The workflow deploys to `./public_html/` by default. If your cPanel uses a different directory (like `public_html/` or `www/`), update the workflow file:

```yaml
server-dir: ./public_html/ # Change this if needed
```

Common alternatives:

- `./public_html/` (default)
- `./www/`
- `./htdocs/`
- `./` (root of FTP account)

### Step 5: Test the Workflow

1. Make a small change to your code
2. Commit and push to `main` or `master` branch:
   ```bash
   git add .
   git commit -m "Test automated deployment"
   git push origin main
   ```
3. Go to **Actions** tab in GitHub to see the workflow running
4. Wait for it to complete (usually 2-5 minutes)
5. Check your website - it should be updated!

## 🎯 How It Works

```
Push to GitHub → GitHub Actions triggers → Builds Next.js → Deploys via FTP → Website updated!
```

## 🔄 Manual Deployment

You can also trigger deployments manually:

1. Go to **Actions** tab in GitHub
2. Select **Build and Deploy to cPanel** workflow
3. Click **Run workflow** → **Run workflow**

## ⚙️ Advanced Configuration

### Deploy to Different Branch

To deploy from a different branch, edit `.github/workflows/deploy-cpanel.yml`:

```yaml
on:
  push:
    branches:
      - main
      - develop # Add your branch here
```

### Use SFTP Instead of FTP

If your cPanel supports SFTP (more secure), you can use a different action. Replace the deploy step in the workflow:

```yaml
- name: Deploy to cPanel via SFTP
  uses: easingthemes/ssh-deploy@v4
  with:
    SSH_PRIVATE_KEY: ${{ secrets.CPANEL_SSH_KEY }}
    REMOTE_HOST: ${{ secrets.CPANEL_SERVER }}
    REMOTE_USER: ${{ secrets.CPANEL_USERNAME }}
    REMOTE_PORT: 22
    SOURCE: 'out/'
    TARGET: '/home/username/public_html/'
```

### Exclude Files from Deployment

Edit the `exclude` section in the workflow to skip certain files:

```yaml
exclude: |
  **/.git*
  **/.git*/**
  **/node_modules/**
  **/.DS_Store
  **/README.md
```

## 🐛 Troubleshooting

### Build Fails

- Check that `next.config.js` has `output: 'export'`
- Verify Node.js version compatibility
- Check build logs in GitHub Actions

### FTP Connection Fails

- Verify FTP credentials are correct
- Check if FTP is enabled in cPanel
- Try using IP address instead of domain name
- Check firewall settings

### Files Not Uploading

- Verify `server-dir` path is correct
- Check FTP account permissions
- Ensure `public_html/` directory exists

### Website Shows Old Content

- Clear browser cache
- Check if files were actually uploaded (via cPanel File Manager)
- Verify deployment completed successfully in GitHub Actions

## 🔒 Security Best Practices

1. **Use a dedicated FTP account** for deployments (not your main cPanel account)
2. **Restrict FTP access** to only the `public_html/` directory
3. **Use SFTP** if available (more secure than FTP)
4. **Never commit secrets** to your repository
5. **Rotate passwords** regularly

## 📝 Notes

- The workflow only deploys when you push to `main` or `master` branch
- Build artifacts are stored temporarily during deployment
- The `out/` folder is generated fresh on each build
- Old files in `public_html/` are replaced with new ones

## ✅ Checklist

- [ ] `next.config.js` configured for static export
- [ ] GitHub secrets added (FTP server, username, password)
- [ ] Tested push to trigger deployment
- [ ] Verified website updates correctly
- [ ] Checked GitHub Actions logs for any errors

---

**Need help?** Check the GitHub Actions logs for detailed error messages.
