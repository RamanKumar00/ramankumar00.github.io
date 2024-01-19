#include<iostream>
using namespace std;

void checkEligibility(int age) {
    if (age >= 18) {
        cout << "You are eligible to vote!" << endl;
    } else {
        cout << "Sorry, you are not eligible to vote." << endl;
    }
}

int main() {
    int age;

    
    cout << "Enter your age: ";
    cin >> age;

    
    checkEligibility(age);

    return 0;
}
