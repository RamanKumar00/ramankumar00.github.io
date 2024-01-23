#include<iostream>
#include<string>
using namespace std;

// Function to count the number of vowels in a string
int countVowels(const string& str) {
    int vowelCount = 0;
    for (char ch : str) {
        char lowercaseCh = tolower(ch);

        if (lowercaseCh == 'a' || lowercaseCh == 'e' || lowercaseCh == 'i' || lowercaseCh == 'o' || lowercaseCh == 'u') {
            vowelCount++;
        }
    }
    return vowelCount;
}

int main() {
  
    cout << "Enter a string: ";
    string userString;
    getline(cin, userString);  // Allowing spaces in the input

   
    int vowelCount = countVowels(userString);

    
    cout << "Number of vowels in the string: " << vowelCount << endl;

    return 0;
}
