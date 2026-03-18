interface SearchFormProps {
    onSubmit: (topic: string) => void
}

export default function SearchForm({ onSubmit }: SearchFormProps) {
    const handleSubmit = (formData: FormData) => {
        const topic = formData.get('topic') as string;
        if (topic === "") {
            alert('Please enter a search topic');
            return;
        }
        onSubmit(topic);
    };
  
  return (
    <form action={handleSubmit}>
      <input type="text" name="topic" placeholder="Search..." />
      <button type="submit">Search</button>
    </form>
  )
}