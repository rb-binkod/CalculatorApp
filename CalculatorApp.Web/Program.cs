using CalculatorApp.Application.Interfaces;
using CalculatorApp.Application.Services;

namespace CalculatorApp.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // MVC + Dependency Injection
            builder.Services.AddControllersWithViews();
            builder.Services.AddScoped<ICalculatorRepository, CalculatorService>();

            var app = builder.Build();
            app.UseStaticFiles();
            app.UseRouting();

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Calculator}/{action=Simple}/{id?}");

            app.Run();
        }
    }
}
