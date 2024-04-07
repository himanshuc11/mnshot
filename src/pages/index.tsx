export default function Home() {
  const test = async () => {
    const response = await fetch("/api/send", {
      method: "POST",
    });
    console.log(response)
  }

  return (
    <>
      <button onClick={test}>CLick Me</button>
    </>
  );
}