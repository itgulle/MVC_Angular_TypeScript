using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVC_Angular_TypeScript.Startup))]
namespace MVC_Angular_TypeScript
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
