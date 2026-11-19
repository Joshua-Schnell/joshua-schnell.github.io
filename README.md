# joshuaschnell.com

Personal academic website for Joshua T. Schnell. Built with Jekyll, hosted free on GitHub Pages, edited through a Pages CMS dashboard.

This guide takes you from these files to a live site. Plan on about an hour for steps 1–4, then a short wait for DNS in step 6.

---

## 1. Create a GitHub account and repository

1. Sign up at <https://github.com> (free). Pick your username carefully; it appears in your temporary site address.
2. Click **+** (top right) → **New repository**.
3. Name it exactly **`YOUR-USERNAME.github.io`** (for example `jschnell.github.io`). Using this exact name keeps every link on the site working, both now and after you connect your domain.
4. Set it to **Public**, leave everything else as is, and click **Create repository**.

## 2. Upload the site files

1. On the new repository page, click **uploading an existing file**.
2. Unzip the site folder on your computer, open it, select **everything inside it**, and drag it into the upload area.
   - **Important:** the file `.pages.yml` starts with a dot, so your computer hides it. On a Mac, press **Cmd + Shift + .** in Finder to show hidden files. On Windows, choose **View → Show → Hidden items** in File Explorer. Make sure `.pages.yml` is included in what you drag.
3. Click **Commit changes**.

## 3. Turn on GitHub Pages

1. In the repository, go to **Settings → Pages**.
2. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch to **main**, folder **/ (root)**, then **Save**.
3. Wait one or two minutes, then visit `https://YOUR-USERNAME.github.io`. Your site is live at that address. Your Squarespace site keeps running in the meantime.

The **Actions** tab shows each build. A green check means the site updated; a red X means a build failed. Click into it to see which file caused the problem.

## 4. Set up the editing dashboard

1. Go to <https://app.pagescms.org> and sign in with GitHub.
2. When asked, install the Pages CMS app on your `YOUR-USERNAME.github.io` repository.
3. Open the repository. The left sidebar lists every editable part of the site: home page, projects, CV, media, courses, lab, related sites, contact, and the menu.
4. Edit, click **Save**, and the live site updates in about a minute.

Uploaded files (CV, syllabi, photos) are stored in `assets/uploads/`.

## 5. Replace the placeholders

Anything in **[square brackets]** is placeholder text. Work through the dashboard sections:

- **CV**: upload your current CV PDF and update the "Last updated" date. (The current PDF is a placeholder page.)
- **Name, contact, and photo**: add a headshot; check the tagline and office address; add ORCID, Google Scholar, and other profiles.
- **Home page**: rewrite the bio in your own words.
- **Research projects**: fill in Project TOMBS and the MesoBIO database; tick "Show on the home page" for projects you want featured.
- **Media items**: add interviews, talks, and press, newest first.
- **Courses and syllabi**: add each course and upload its syllabus PDF.
- **MesoBIO Lab page** and **Lab people**: describe the lab and add members.
- **Related sites and tools**: once a tool is online, paste its address into its Link field. Until then it shows "Launching soon". Tools also appear on the home page.

## 6. Connect joshuaschnell.com

Do this once the new site looks right.

1. In GitHub: profile picture → **Settings → Pages → Add a domain**, enter `joshuaschnell.com`, and follow the steps to verify it. This protects the domain from being claimed by anyone else's GitHub site.
2. In the repository: **Settings → Pages → Custom domain**, enter `joshuaschnell.com`, and **Save**.
3. Where your domain's DNS is managed (Squarespace → **Domains** → joshuaschnell.com → **DNS settings**):
   - Delete the existing Squarespace records for the website (the A records and the `www` CNAME that point to Squarespace). **Leave any email records (MX, TXT) alone.**
   - Add four **A** records for host `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Add a **CNAME** record for host `www` pointing to `YOUR-USERNAME.github.io`
4. Wait. DNS changes take anywhere from a few minutes to a day.
5. Back in **Settings → Pages**, tick **Enforce HTTPS** once GitHub offers it.

## 7. Leave Squarespace

1. Confirm `https://joshuaschnell.com` shows the new site.
2. Cancel the Squarespace **website** subscription. **Don't delete or release the domain.**
3. Optional, to save more: transfer the domain to a cheaper registrar such as Cloudflare Registrar (sold at cost). In Squarespace, unlock the domain and request the transfer authorization code; then start the transfer at the new registrar and recreate the DNS records from step 6 there. Domains can't be transferred within 60 days of registration or a previous transfer.

## Connecting your tools

Each app can live at its own subdomain. When an app is hosted (for example, on its own GitHub Pages repository or another host), add a **CNAME** record in your DNS such as `tombs` → the address your host gives you. Then put `https://tombs.joshuaschnell.com` in the app's Link field in **Related sites and tools**.

## How the site is organized

| Where | What |
|---|---|
| `index.md`, `research.md`, `cv.md`, … | Page text (intros, bio, lab description) |
| `_data/*.yml` | Lists: projects, media, courses, lab people, related sites, menu, profile |
| `_layouts/` | Page templates |
| `assets/css/style.css` | Colors, fonts, spacing (colors are at the top) |
| `assets/uploads/` | Your PDFs and images |
| `.pages.yml` | Dashboard setup |

To add a whole new page: create `newpage.md` with a `title:` at the top, then add it in **Menu** with the address `/newpage/`.
