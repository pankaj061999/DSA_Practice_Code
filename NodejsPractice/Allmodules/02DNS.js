// dns Module का उपयोग
// Domain Name Resolution: DNS queries के माध्यम से domain names को resolve करना।
// Reverse DNS Lookup: IP addresses को domain names में convert करना।
// Custom DNS Servers: Custom DNS servers से queries करना।

const dns = require("dns");

dns.lookup("example.com", (err, address, family) => {
  if (err) throw err;
  console.log("IP Address:", address);
  console.log("Address Family:", family); // IPv4 or IPv6
});

// console.log("Print dns", dns);

// options parameter में आप कुछ additional settings specify कर सकते हैं, जैसे कि family (IPv4 या IPv6) और all (सभी IP addresses return करना)।

// dns.resolve(hostname, [rrtype], callback)
// यह method DNS records (जैसे कि A, MX, TXT, etc.) को resolve करने के लिए उपयोग किया जाता है।
// आप specify कर सकते हैं कि आप किस प्रकार का record retrieve करना चाहते हैं।

dns.resolve("example.com", "A", (err, addresses) => {
  if (err) throw err;
  console.log("A records:", addresses);
});

// कुछ common rrtype values: A (IPv4 addresses), AAAA (IPv6 addresses), MX (Mail Exchange records), TXT (Text records), आदि।
// 3. dns.reverse(ip, callback)
// यह method एक IP address को domain name में resolve करता है (reverse DNS lookup)।

dns.reverse("142.250.196.46", (err, hostnames) => {
  if (err) throw err;
  console.log("Hostnames:", hostnames);
});

dns.resolve4("example.com", (err, addresses) => {
  if (err) throw err;
  console.log("IPv4 addresses:", addresses);
});

dns.resolve6("example.com", (err, addresses) => {
  if (err) throw err;
  console.log("IPv6 addresses:", addresses);
});

const servers = dns.getServers();
console.log("DNS Servers:", servers);
