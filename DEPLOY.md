# Portfolio Website

## Deployment Instructions

### Deploy to Vercel

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push -u origin main
   ```

2. Go to [Vercel](https://vercel.com)

3. Click "Add New Project"

4. Import your repository: `muhammadimran9/portfolio-app`

5. Configure Environment Variables (if using Firebase):
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_DATABASE_URL`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`

6. Click "Deploy"

### Custom Domain

After deployment:
1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Update your domain's DNS settings as instructed by Vercel

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)
