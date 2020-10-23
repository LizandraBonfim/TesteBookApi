using System;
using System.Collections.Generic;

namespace Lizandra.Lyncas.BookApi.Entities
{
    public  class VolumeInfo
    {
        public string Title { get; set; }
        public string Subtitle { get; set; }
        public string PublishedDate { get; set; }
        public long? PageCount { get; set; }
        public double? AverageRating { get; set; }
        public long? RatingsCount { get; set; }
        public bool AllowAnonLogging { get; set; }
        public string ContentVersion { get; set; }
        public ImageLinks ImageLinks { get; set; }
        public Uri PreviewLink { get; set; }
        public List<string> Authors { get; set; }
        public string Publisher { get; set; }
        public string Description { get; set; }
        public List<string> Categories { get; set; }
    }
}