using MVC_Angular_TypeScript.Models;

namespace MVC_Angular_TypeScript.Builders
{
    public class AboutUsModelBuilder : IAboutUsModelBuilder
    {
        public AboutUsViewModel Build()
        {
            return new AboutUsViewModel
            {
                CompanyName = "ABC Company",
                CompanyAddress = "ABC Address"
            };
        }
    }
}