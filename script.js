let votes = {}
function vote(candidate){
  if(votes[candidate]){
    votes[candidate]++
  } else {
    votes[candidate] = 1
  }
  alert(`You voted for ${candidate}`)
}
function showResults(){
  const resultsContainer = document.getElementById('results-container')
  resultsContainer.innerHTML = ''
  for (const candidate in votes){
    const result = document.createElement('div');
    result.textContent = `${candidate}: ${votes[candidate]} votes`;
    resultsContainer.appendChild(result);
  }
}