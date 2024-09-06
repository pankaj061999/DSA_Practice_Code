import { useEffect, useState } from "react";

export default function PDFReaderHomePage() {
  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    const fetchPDF = async () => {
      try {
        // Fetch PDF data from the API
        const response = await fetch("http://localhost:3003/v1/auth/generate-pdf", {
          method: "GET", // Assuming you're using GET as per your code
        });

        if (!response.ok) {
          throw new Error("Failed to fetch PDF");
        }

        // Parse response as JSON
        const jsonResponse = await response.json();

        // Convert JSON response to Uint8Array
        const byteArray = new Uint8Array(Object.values(jsonResponse));

        // Create a Blob from the Uint8Array
        const pdfBlob = new Blob([byteArray], { type: "application/pdf" });

        // Create an object URL for the Blob
        const pdfUrl = URL.createObjectURL(pdfBlob);

        console.log("print json parse ", pdfUrl);

        // Set the URL to state
        setPdfUrl(pdfUrl);
      } catch (error) {
        console.error("Error loading PDF:", error);
      }
    };

    fetchPDF();
  }, []);

  return (
    <div>
      <h1>View PDF</h1>
      {pdfUrl ? (
        <iframe src={pdfUrl} style={{ width: "100%", height: "800px" }} frameBorder="0"></iframe>
      ) : (
        <p>Loading PDF...</p>
      )}
    </div>
  );
}
