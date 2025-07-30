# 🌹 Paylynk UI Slicing Guideline – Neo-brutalist Rose Theme (Light Mode)

All MVP features and pages live under the `/dashboard` route and follow a **neo-brutalist light pink aesthetic**.

---

## 🎨 Design Tokens & Theme

refer to global css as the source of theming.

---

## 🗂️ `/dashboard` Route Structure

All pages below are prefixed with `/dashboard`.
for dashboard component utilize the sidebar component already available at components directory

## currently data is still not available, so use mock data.

---

### 2. `/dashboard`

> Main user dashboard after login

**Components:**

- `<StatCard />` – Links, Clicks, Conversions, Volume
- `<PerformanceChart />` – Clicks over time (line chart)
- `<LinkTypeBarChart />` – Link type usage

**Data Source:**

- `/api/stats/summary`
- `/api/stats/performance`

---

### 3. `/dashboard/links`

> CRUD for all Paylynk links

**Components:**

- `<SearchBar />` – Filter links by keyword
- `<LinkTable />` – Title, Type, Status, Stats
- `<LinkTypeBadge />` – NFT Mint, Token Transfer, etc.
- `<StatusBadge />` – Active, Paused, Completed
- `<LinkActionMenu />` – View/Edit/Delete/Duplicate

**Data Source:**

- `/api/links`
- Supports pagination, filters

---

### 4. `/dashboard/payments`

> Payment history & stats

**Components:**

- `<PaymentStatCard />` – Total Sent/Received/Pending
- `<PaymentTable />` – List of transactions
- `<SearchPayments />`, `<FilterPayments />`
- `<StatusBadge />` – Completed, Pending
- `<PaymentActions />` – View onchain details

**Data Source:**

- `/api/payments`
- `/api/tx/:id`

---

### 5. `/dashboard/analytics`

> Advanced insights and exportable data

**Components:**

- `<KpiCard />` – Clicks, Views, Conversion, Revenue
- `<LineChart />`, `<DonutChart />` – Time-based + Type split
- `<TimeFilterDropdown />` – Last 7d / 30d / 90d
- `<ExportCSVButton />`

**Data Source:**

- `/api/analytics/overview`
- `/api/analytics/distribution`

---

### 6. `/dashboard/settings`

> Profile, wallet, and preferences

**Tabs:**

- `Profile`, `Wallets`, `Preferences`, `Notifications`, `Security`

**Components (Profile tab):**

- `<AvatarUploader />`
- `<ProfileForm />` – ENS, Display Name, Email, etc.
- `<SaveProfileButton />`

**Data Source:**

- `/api/user/me`
- `PUT /api/user/me`

---

## 🔄 Reusable Components

| Component          | Description                           |
| ------------------ | ------------------------------------- |
| `<StatusBadge />`  | Active / Paused / Completed / Pending |
| `<Card />`         | Thick-bordered brutalist container    |
| `<EmojiHeading />` | Headline with emoji icon (⭐, 🔗, 💰) |

---

## 📦 Extras

### ✅ Smart Link Flow (`/dashboard/create`)

1. `<FileUpload />` – IPFS
2. `<PricingForm />` – Fixed/Free/Donation
3. `<PreviewLink />` – Onchain URL
4. `<PayButton />` – Trigger Wallet + TX

---
