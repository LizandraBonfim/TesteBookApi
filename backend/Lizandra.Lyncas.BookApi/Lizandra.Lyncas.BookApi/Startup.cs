using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Lizandra.Lyncas.BookApi.Data;
using Lizandra.Lyncas.BookApi.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;

namespace Lizandra.Lyncas.BookApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddCors(e => e.AddPolicy("total",
                builder => builder
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
            ));
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "Lizandra - API de pesquisa de livros",
                    Description = "Esta API faz parte do desafio da empresa Lyncas",
                    Contact = new OpenApiContact
                        {Name = "Lizandra Bonfim", Email = "lizandra.oliveirasouza@hotmail.com"},
                    License = new OpenApiLicense {Name = "MIT", Url = new Uri("https://opensource.org/license")}
                });
            });

            services.AddDbContext<BooksContext>(x 
                => x.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));

            services.AddScoped<FavoritosRepository, FavoritosRepository>();
            services.AddScoped<FavoritoService, FavoritoService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("total");
            app.UseSwagger();
            app.UseSwaggerUI(c =>
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "v1"));

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
        }
    }
}