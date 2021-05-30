//
//  ContentView.swift
//  Shared
//
//  Created by 장동현 on 2021/05/30.
//

import SwiftUI

struct ContentView: View {
    @Binding var document: iosAppDocument

    var body: some View {
        TextEditor(text: $document.text)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView(document: .constant(iosAppDocument()))
    }
}
