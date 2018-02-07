using MVC_Angular_TypeScript.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_Angular_TypeScript.Controllers
{
    public class HomeController : Controller
    {
        private readonly IAboutUsModelBuilder _iAboutUsModelBuilder;

        public HomeController()
        {
            _iAboutUsModelBuilder = new AboutUsModelBuilder();
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult AboutUs()
        {
            var model = _iAboutUsModelBuilder.Build();
            return View(model);
        }
    }
}