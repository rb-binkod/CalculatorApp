namespace CalculatorApp.Application.Interfaces
{
    public interface ICalculatorRepository
    {
        double Calculate(double num1, double num2, string operation);
        double ScientificCalculate(string expression);
    }
}