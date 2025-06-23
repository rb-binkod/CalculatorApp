using Microsoft.AspNetCore.Mvc;
using CalculatorApp.Application.Interfaces;
using System.Data;

namespace CalculatorApp.Web.Controllers
{
    public class CalculatorController : Controller
    {
        private readonly ICalculatorRepository _calculator;

        public CalculatorController(ICalculatorRepository calculator)
        {
            _calculator = calculator;
        }

        public IActionResult Simple() => View();
        public IActionResult Scientific() => View();

        [HttpPost]
        public JsonResult SimpleCalculate([FromBody] CalcRequest request)
        {
            var result = _calculator.Calculate(request.Num1, request.Num2, request.Operation);
            return Json(result);
        }

        [HttpPost]
        public JsonResult ScientificCalculate([FromBody] SciCalcRequest request)
        {
            var result = _calculator.ScientificCalculate(request.Expression);
            return Json(result);
        }

        [HttpPost]
        public IActionResult EvaluateExpression([FromBody] ExpressionModel model)
        {
            try
            {
                var result = new DataTable().Compute(model.Expression, null);
                return Json(result.ToString());
            }
            catch
            {
                return Json("Error");
            }
        }


        public class CalcRequest
        {
            public double Num1 { get; set; }
            public double Num2 { get; set; }
            public string Operation { get; set; }
        }

        public class SciCalcRequest
        {
            public string Expression { get; set; }
        }

        public class ExpressionModel
        {
            public string Expression { get; set; }
        }

    }
}