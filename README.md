# Browser Extension
This is the data capture that helps extract important meta data and contents from a web page.

## Architecture
Browser Extension → Local FastAPI → Local Vector Store (SQLite / FAISS)

## Setup 
- Open Terminal and clone the repo using: `git clone https://github.com/pastense/extension.git`
- Head over to `chrome://extensions/` if you're on Chrome, and click `Load Unpacked` (see below).
<img width="524" height="201" alt="image" src="https://github.com/user-attachments/assets/960a15be-42bd-4075-a7ff-3b9bbe71fb47" />

- Locate the directory containing the cloned repo and load it.
- With the [FastAPI service](https://github.com/pastense/fastapi) running, enter your OpenAI API key into the form at `https://127.0.0.1:8000` (don't worry, it's stored locally!) 

## Next Steps
Once installed, Pastense will automatically log and embed your browsing data locally.  
You can search semantically through your history via the UI served by the FastAPI service.

If you’d like to contribute, suggest features, or discuss ideas for the next iteration, feel free to:
- Open an issue on this repo 🧠  
- Join our upcoming community space (Discord / Slack) to share feedback 💬  

Built with ❤️ as part of the [Pastense](https://github.com/pastense) initiative.
