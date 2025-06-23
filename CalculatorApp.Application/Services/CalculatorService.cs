using System;
using CalculatorApp.Application.Interfaces;

namespace CalculatorApp.Application.Services
{
    public class CalculatorService : ICalculatorRepository
    {
        public double Calculate(double num1, double num2, string operation)
        {
            return operation switch
            {
                "+" => num1 + num2,
                "-" => num1 - num2,
                "*" => num1 * num2,
                "/" => num2 != 0 ? num1 / num2 : throw new DivideByZeroException("Cannot divide by zero"),
                _ => throw new InvalidOperationException("Invalid operation")
            };
        }

        public double ScientificCalculate(string expression)
        {
            var result = new System.Data.DataTable().Compute(expression, null);
            return Convert.ToDouble(result);
        }
    }
}