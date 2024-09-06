const styles = {
  accordionContainer: {
    width: "80%",
    margin: "0 auto",
    backgroundColor: "#f7f7f7",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
  },
  accordionList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  accordionItem: {
    backgroundColor: "#fff",
    borderRadius: "6px",
    padding: "15px",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  question: {
    fontSize: "18px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0",
  },
  icon: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  answer: {
    fontSize: "16px",
    color: "#555",
    marginTop: "10px",
  },
};
export default styles;
