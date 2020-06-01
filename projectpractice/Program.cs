using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace projectpractice
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}


//migrationBuilder.Sql("INSERT INTO Movie VALUES (1, \"Cars\", \"Cartoon\")");
//            migrationBuilder.Sql("INSERT INTO Movie VALUES (2, \"Walle\", \"Cartoon\")");
//            migrationBuilder.Sql("INSERT INTO Movie VALUES (3, \"Avengers\", \"Action\")");
//            migrationBuilder.Sql("INSERT INTO Movie VALUES (4, \"Lalaland\", \"Music\")");
