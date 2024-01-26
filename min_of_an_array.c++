#include<iostream>
using namespace std;
int main()
{
    int arr[5]={8,7,9,5,11};
    int size=5;
    int min= arr[0];
    for(int i=1;i<size;i++)
    {
        if(arr[i]<min)
        {
             min=arr[i];
        }
    }
    cout<<"the minimum element in this array is: "<< min;
    return 0;
}