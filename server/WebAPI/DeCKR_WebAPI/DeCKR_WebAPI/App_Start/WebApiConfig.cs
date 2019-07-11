using System.Web.Http;

namespace DeCKR_WebAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
                );

            config.Routes.MapHttpRoute(
                name: "SingleContract",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
                );

            config.Routes.MapHttpRoute(
                name: "UserContracts",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
                );


            config.Routes.MapHttpRoute(
                 name: "SingleSecurity",
                 routeTemplate: "api/{controller}/{action}/{id}",
                 defaults: new { id = RouteParameter.Optional }
                 );

            config.Routes.MapHttpRoute(
                  name: "UserSecurityGroups",
                  routeTemplate: "api/{controller}/{action}/{id}",
                  defaults: new { id = RouteParameter.Optional }
                  );


            config.Routes.MapHttpRoute(
                 name: "SingleTraining",
                 routeTemplate: "api/{controller}/{action}/{id}",
                 defaults: new { id = RouteParameter.Optional }
                 );

            config.Routes.MapHttpRoute(
              name: "UserTrainings",
              routeTemplate: "api/{controller}/{action}/{id}",
              defaults: new { id = RouteParameter.Optional }
              );


            config.Routes.MapHttpRoute(
                 name: "SingleUser",
                 routeTemplate: "api/{controller}/{action}/{id}",
                 defaults: new { id = RouteParameter.Optional }
                 );

            config.Routes.MapHttpRoute(
              name: "DepartmentUsers",
              routeTemplate: "api/{controller}/{action}/{id}",
              defaults: new { id = RouteParameter.Optional }
              );


            config.Routes.MapHttpRoute(
                name: "SecurityProgress",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
                );

            config.Routes.MapHttpRoute(
                name: "TrainingProgress",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
                );

            config.Routes.MapHttpRoute(
                name: "ContractProgress",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
                );

            config.Routes.MapHttpRoute(
                name: "DepartmentProgress",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
                );

            config.Routes.MapHttpRoute(
                name: "SingleUserProgress",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
                );

            config.Routes.MapHttpRoute(
                name: "UserSettings",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
                );

            config.Routes.MapHttpRoute(
                name: "DepartmentSettings",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
                );


            config.Routes.MapHttpRoute(
                name: "Modules",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
                );
        }
    }
}
