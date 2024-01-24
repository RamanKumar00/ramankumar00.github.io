#include<iostream>
using namespace std;
int main()
 {
    int arr[7] = {4,9,7,98,56,89,78};
    int max = 0;
    for(int i = 0;i<7;i++)
        {
            if(max < arr[i])
                max = arr[i];
        }
    cout<<max<<endl;
    return 0;
}