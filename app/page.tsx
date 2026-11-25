"use client";

export default function Portfolio() {
  return (
    <div style={{ minHeight: "100vh", background: "white", fontFamily: "system-ui, sans-serif", color: "#0F172A" }}>
      <header style={{ maxWidth: 1100, margin: "0 auto", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <b style={{ fontSize: 20 }}>Zairea Hairston</b>
        <div style={{ display: "flex", gap: 10 }}>
          <a href="https://github.com/zaireahairston75" target="_blank" style={{ background: "#0F172A", color: "white", padding: "10px 18px", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>View on GH</a>
          <a href="mailto:brockwalker75@outlook.com" style={{ border: "1px solid #0F172A", padding: "10px 18px", borderRadius: 10, fontWeight: 700, textDecoration: "none", color: "#0F172A", fontSize: 14 }}>Contact Me</a>
        </div>
      </header>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 20px 10px" }}>
        <h1 style={{ fontSize: 38, margin: "0 0 10px" }}>Zairea Hairston</h1>
        <p style={{ fontSize: 18, fontWeight: 700, color: "#1E40AF", margin: 0 }}>Finance Analyst | Financial Analysis, Budgeting & Investment Research</p>
        <p style={{ color: "#475569", maxWidth: 800, lineHeight: 1.6, fontSize: 16 }}>
          Finance Analyst in Martinsville, VA. I build budgets, forecasts, and investment tools that turn complex financial data into clear decisions. BS Finance — Virginia Commonwealth University. MS Finance (Pursuing) — 【entity-Virginia Tech¦canonical_name=Virginia Tech】. Self-Employed — Available Immediately.
        </p>
        <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
          <a href="https://github.com/zaireahairston75" target="_blank" style={{ background: "#0F172A", color: "white", padding: "12px 20px", borderRadius: 10, fontWeight: 700, textDecoration: "none" }}>View on GH</a>
          <a href="https://www.linkedin.com/in/zairea-hairston-202b7340a/" target="_blank" style={{ border: "1px solid #0F172A", padding: "12px 20px", borderRadius: 10, fontWeight: 700, textDecoration: "none", color: "#0F172A" }}>LinkedIn</a>
        </div>
        <p style={{ color: "#475569", marginTop: 12, fontSize: 14 }}>📧 brockwalker75@outlook.com • 📍 Martinsville, VA • 💼 Self-Employed — Finance Analyst</p>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px" }}>
        <h2 style={{ fontSize: 34, margin: "0 0 24px" }}>Projects</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

          <div style={{ border: "1px solid #0F172A", borderRadius: 16, padding: 28 }}>
            <h3 style={{ fontSize: 24, margin: "0 0 12px" }}>BudgetBuddy</h3>
            <p style={{ color: "#475569", lineHeight: 1.6, margin: "0 0 16px" }}>Budgeting app: track income, expenses by category, set limits, see variance vs budget, and how much is left. Demonstrates budgeting, forecasting, and variance analysis.</p>
            <p style={{ color: "#1E40AF", margin: "0 0 20px" }}>Excel • Financial Modeling • Budgeting • Forecasting</p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://budgetbuddy-eta.vercel.app/" target="_blank" style={{ background: "#1E40AF", color: "white", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none" }}>Live Demo</a>
              <a href="https://github.com/zaireahairston75/budgetbuddy" target="_blank" style={{ border: "1px solid #0F172A", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none", color: "#0F172A" }}>View on GH</a>
            </div>
          </div>

          <div style={{ border: "1px solid #E2E8F0", borderRadius: 16, padding: 28, opacity: 0.9 }}>
            <h3 style={{ fontSize: 24, margin: "0 0 12px" }}>PortfolioTracker — Coming Next</h3>
            <p style={{ color: "#475569", lineHeight: 1.6, margin: "0 0 16px" }}>Investment analyzer: track stocks & ETFs, cost, value, gain/loss, allocation, and risk. Coming next — we will add Live Demo here.</p>
            <p style={{ color: "#1E40AF", margin: "0 0 20px" }}>Investment Research • Portfolio Management • Valuation</p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="#" style={{ background: "#94A3B8", color: "white", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none" }}>Coming Soon</a>
              <a href="https://github.com/zaireahairston75" target="_blank" style={{ border: "1px solid #0F172A", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none", color: "#0F172A" }}>View on GH</a>
            </div>
          </div>

          <div style={{ border: "1px solid #E2E8F0", borderRadius: 16, padding: 28, opacity: 0.9 }}>
            <h3 style={{ fontSize: 24, margin: "0 0 12px" }}>FinanceDash — Coming Next</h3>
            <p style={{ color: "#475569", lineHeight: 1.6, margin: "0 0 16px" }}>Financial reporting dashboard: revenue, expenses, profit, cash flow, KPIs, and monthly trends. Coming next — we will add Live Demo here.</p>
            <p style={{ color: "#1E40AF", margin: "0 0 20px" }}>Financial Reporting • Power BI • Dashboards</p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="#" style={{ background: "#94A3B8", color: "white", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none" }}>Coming Soon</a>
              <a href="https://github.com/zaireahairston75" target="_blank" style={{ border: "1px solid #0F172A", padding: "10px 18px", borderRadius: 10, fontWeight: 600, textDecoration: "none", color: "#0F172A" }}>View on GH</a>
            </div>
          </div>

        </div>

        <div style={{ marginTop: 40, border: "1px solid #E2E8F0", borderRadius: 16, padding: 24 }}>
          <h3 style={{ margin: "0 0 10px" }}>Skills</h3>
          <p style={{ color: "#475569", lineHeight: 1.6, margin: 0 }}>Financial Analysis • Financial Modeling • Budgeting • Forecasting • Microsoft Excel • Accounting • Investment Analysis • Financial Reporting • Data Analysis • Power BI • 【entity-QuickBooks¦canonical_name=QuickBooks】 • Variance Analysis • SQL • Tableau • Bloomberg Terminal • Risk Management • Portfolio Management • Valuation • GAAP • Python</p>
        </div>

        <div style={{ marginTop: 20, border: "1px solid #E2E8F0", borderRadius: 16, padding: 24 }}>
          <h3 style={{ margin: "0 0 10px" }}>Education</h3>
          <p style={{ margin: "0 0 6px" }}><b>BS Finance</b> — Virginia Commonwealth University, Richmond, VA — 2020-2024</p>
          <p style={{ margin: 0 }}><b>MS Finance (Pursuing)</b> — 【entity-Virginia Tech¦canonical_name=Virginia Tech】, Blacksburg, VA — 2025-Present</p>
        </div>

        <p style={{ textAlign: "center", color: "#64748B", fontSize: 13, marginTop: 40 }}>© 2026 Zairea Hairston • Martinsville, VA • Finance Analyst</p>
      </div>
    </div>
  );
}