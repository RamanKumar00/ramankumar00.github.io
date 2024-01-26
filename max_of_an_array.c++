#include<iostream>
using namespace std;
int main()
{
    int arr[5]={12,42,85,21,35};
    int size=5;
    int maxelement=arr[0];
    for(int i=1;i<size;i++)
    {
        if(arr[i]>maxelement)
        {
            maxelement=arr[i];
        }
    }
    cout<<"the maximum element in array is: "<<maxelement;
    return 0;

}