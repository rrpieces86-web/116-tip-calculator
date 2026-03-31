 const tipPercentages = [18, 20, 25];
 
        document.getElementById('tip-form').addEventListener('submit', function(e) {
            e.preventDefault();
 
            const input = document.getElementById('usertotal').value.trim().replace(/^\$/, '');
            const total = parseFloat(input);
            const errorMsg = document.getElementById('error-msg');
            const resultsContainer = document.getElementById('results-container');
            const resultsRow = document.getElementById('results-row');
 
            if (isNaN(total) || total <= 0) {
                errorMsg.style.display = 'block';
                resultsContainer.style.display = 'none';
                return;
            }
 
            errorMsg.style.display = 'none';
 
            // Build tip cards
            resultsRow.innerHTML = tipPercentages.map(pct => {
                const tipAmt = total * (pct / 100);
                const grandTotal = total + tipAmt;
                return `
                    <div class="tip-card card border border-secondary text-center p-3 shadow-sm">
                        <div class="tip-percent">${pct}%</div>
                        <div class="tip-amount mt-1">Tip: $${tipAmt.toFixed(2)}</div>
                        <div class="tip-total mt-1">Total: $${grandTotal.toFixed(2)}</div>
                    </div>
                `;
            }).join('');
 
            resultsContainer.style.display = 'block';
        });