namespace Converter
{
    internal class Program
    {
        static async Task Main(string[] args)
        {
            var baseUrl = "https://www.projectaon.org/en/xhtml/lw/05sots"; // + /sect1.htm
            const string directory = @"D:\repos\ShadowOnTheSand\Converter";
            const string fileName = "sots.md";
            
            var filePath = Path.Combine(directory, fileName);
            File.Delete(filePath);

            using (HttpClient client = new HttpClient())
            {
                var i = 1;
                
                while (true)
                {
                    try
                    {
                        var response = await client.GetAsync(baseUrl + "/sect" + i + ".htm");
                        response.EnsureSuccessStatusCode();
                        var html = await response.Content.ReadAsStringAsync();
                        File.AppendAllText(filePath, html);
                        i++;
                    }
                    catch
                    {
                        break;
                    }
                }
            }

            Console.WriteLine($"HTML content saved to {Path.Combine(directory, fileName)}");
        }
    }
}