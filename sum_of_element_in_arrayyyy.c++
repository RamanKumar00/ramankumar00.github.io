#include<iostream>
using namespace std;
int main()
{
    int size;
    cout<<"enter the size of an array: ";
    cin>>size;
    int sum=0;
    int arr[size];
    cin>>arr[size];
    cout<<"enter "<<size <<"element of array: ";
    for(int i=0;i<size;i++)
    {
        cin>>arr[i];

    }
    for(int i=0;i<size;i++)
    {
        sum=sum+arr[i];
    }
    cout<<sum;
    return 0;

}