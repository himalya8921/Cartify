namespace Cartify.Business.Model
{
    public class RawResult<T>
    {
        public T? Data { get; set; }
        public string? Message { get; set; }
        public int Status { get; set; }
        public int RequestStatus { get; set; }
    }
}
