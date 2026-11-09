// Support the update message sent by the original static edition.
self.addEventListener('message', (event) => {
  if (event.data?.type === 'ACTIVATE_UPDATE') self.skipWaiting();
});
