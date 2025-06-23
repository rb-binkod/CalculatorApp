# 🧮 ASP.NET 8 MVC Calculator App

A lightweight and responsive calculator web application built using ASP.NET 8 MVC. This application provides:

✅ Simple arithmetic operations

✅ Scientific calculations

✅ Expression-based input

✅ Full session-based history (using sessionStorage)

✅ Clean Architecture + Repository Pattern

✅ No database dependency

---

## 🧱 Solution Structure

```
CalculatorApp/
├── CalculatorApp.Web  (MVC Frontend)
│   ├── Controllers/
│   │   └── CalculatorController.cs
│   ├── Views/
│   │   └── Calculator/
│   │       ├── Simple.cshtml
│   │       └── Scientific.cshtml
│   ├── wwwroot/
│   │   ├── js/
│   │   │   ├── simple.js
│   │   │   └── scientific.js
│   │   └── css/
│   │       └── calculator.css   
│   └── Program.cs / Startup.cs
│
├── CalculatorApp.Application (Business Logic)
│   ├── Interfaces
│   │   └── ICalculatorRepository.cs
│   └── Services
│       └── CalculatorService.cs
│
└── CalculatorApp.sln
```

---

## ✅ Tech Stack
- Frontend: HTML, CSS, JavaScript (Vanilla)
- Backend: ASP.NET Core 8 MVC
- Architecture: Clean Architecture
- Storage: sessionStorage (client-side) for history
- IDE: Visual Studio 2022+
- Runtime: .NET 8 SDK
---

## 🚀 How to Build, Run & Test

### 🛠️ Build

```bash
dotnet build
```

1. Prerequisites
   
    ✅ Visual Studio 2022 or later

    ✅ .NET 8 SDK

3. Steps
- Download or clone the project
- Open CalculatorApp.sln in Visual Studio
- Press F5 or click Run
- Navigate to:
  
   /Calculator/Simple
  
   /Calculator/Scientific
---

### ▶️ How to Run

```bash
cd CalculatorApp.Web
dotnet run
```
---

## 🧑‍💻 Author

Ravi Bhushan

Senior .NET Developer

🔗 [LinkedIn](https://www.linkedin.com/in/ravibhushan-binkod/)

---

## 📜 License

MIT License — Free to use, modify, and distribute. Use for educational or evaluation purposes.
