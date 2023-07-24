const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
const handleBeforeInstallPrompt = (event) => {
    console.log('beforeinstallprompt event triggered');
    event.preventDefault();
    window.deferredPrompt = event;
    installButton.classList.remove('hidden');
  };

// TODO: Implement a click event handler on the `butInstall` element
const handleInstallButtonClick = async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      return;
    }
  
    try {
      await promptEvent.prompt();
      const userChoice = await promptEvent.userChoice;
      if (userChoice.outcome === 'accepted') {
        console.log('PWA installation accepted by user');
      } else {
        console.log('PWA installation dismissed by user');
      }
      window.deferredPrompt = null;
    } catch (error) {
      console.error('Error while prompting for PWA installation:', error);
    }
  
    installButton.classList.add('hidden');
  };

// TODO: Add an handler for the `appinstalled` event
const handleAppInstalled = (event) => {
    console.log('App installed successfully');
    window.deferredPrompt = null;
  };