export default function fetchTransactionList() {
  return fetch('https://advanced-react-training.now.sh/transactions').then(
    (res) => res.json()
  );
}
