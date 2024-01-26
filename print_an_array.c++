#include<iostream>
using namespace std;
int main()
{
    int size;
    cout<<"enter the size of array: ";
    cin>>size;
    int arr[10];
    for(int i=0;i<size;i++)
    cin>>arr[i];
    for(int i=0;i<size;i++)
    cout<<arr[i]<<" ";

    return 0;


}