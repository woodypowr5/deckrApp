using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DeCKR_WebAPI.Startup))]
namespace DeCKR_WebAPI
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
