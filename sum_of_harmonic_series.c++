#include<iostream>
using namespace std;

double calculateHarmonicSeries(int n) {
    double sum = 0;

    for (int i = 1; i <= n; ++i) {
        sum += 1.0 / i;
    }

    return sum;
}

int main() {
    int n;

    cout << "Enter the value of n: ";
    cin >> n;

   
    cout << "Harmonic series up to " << n << " terms is: ";
    for (int i = 1; i <= n; ++i) {
        if (i == 1) {
            cout << "1";
        } else {
            cout << " + 1/" << i;
        }
    }

    
    double seriesSum = calculateHarmonicSeries(n);
    cout << "\nSum of harmonic series up to " << n << " terms is: " << seriesSum << endl;

    return 0;
}
