document.getElementById('questionForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const question = document.getElementById('questionInput').value;
    const responseOutput = document.getElementById('responseOutput');
    responseOutput.textContent = 'Laen vastust...';

    try {
        const response = await fetch('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', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer asst_h11kIHx0cej5R2JJItk090mN'
            },
            body: JSON.stringify({
                prompt: question
            })
        });

        if (!response.ok) {
            throw new Error('Viga API päringus');
        }

        const data = await response.json();
        responseOutput.textContent = data.response;
    } catch (error) {
        responseOutput.textContent = 'Tekkis viga: ' + error.message;
    }
}); 
