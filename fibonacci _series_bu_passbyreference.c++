#include<iostream>
using namespace std;

void generateFibonacci(int n, int &fib1, int &fib2) {
    fib1 = 0;
    fib2 = 1;

    cout << "Fibonacci Sequence: " << fib1 << " " << fib2 << " ";

    for (int i = 2; i < n; ++i) {
        int nextFib = fib1 + fib2;
        cout << nextFib << " ";
        fib1 = fib2;
        fib2 = nextFib;
    }
}

int main() {
    int n = 8; // You can change the value of n
    int fib1, fib2;

    generateFibonacci(n, fib1, fib2);

    cout << endl;

    return 0;
}
