#include<iostream>
#include<vector>
using namespace std;

vector<int> antiDiagonalPattern(int N, vector<vector<int>>& matrix) {
    vector<int> result;
    
    
    for (int i = 0; i < N; i++) {
        int row = 0, col = i;
        while (col >= 0) {
            result.push_back(matrix[row][col]);
            row++;
            col--;
        }
    }

    
    for (int i = 1; i < N; i++) {
        int row = i, col = N - 1;
        while (row < N) {
            result.push_back(matrix[row][col]);
            row++;
            col--;
        }
    }

    return result;
}

int main() {
    
    int N1 = 2;
    vector<vector<int>> matrix1 = {{1, 2}, {3, 4}};
    vector<int> result1 = antiDiagonalPattern(N1, matrix1);

    cout << "Example 1 Output:";
    for (int num : result1) {
        cout << " " << num;
    }
    cout << endl;

    int N2 = 3;
    vector<vector<int>> matrix2 = {{3, 2, 3}, {4, 5, 1}, {7, 8, 9}};
    vector<int> result2 = antiDiagonalPattern(N2, matrix2);

    cout << "Example 2 Output:";
    for (int num : result2) {
        cout << " " << num;
    }
    cout << endl;

    return 0;
}
