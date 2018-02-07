using System.Web;
using System.Web.Mvc;

namespace MVC_Angular_TypeScript
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
