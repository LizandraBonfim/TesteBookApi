using System;

namespace Lizandra.Lyncas.BookApi.Entities
{
    public class Item
    {
        public string Id { get; set; }
        public string Etag { get; set; }
        public Uri SelfLink { get; set; }
        public VolumeInfo VolumeInfo { get; set; }
        public SearchInfo SearchInfo { get; set; }
    }
}