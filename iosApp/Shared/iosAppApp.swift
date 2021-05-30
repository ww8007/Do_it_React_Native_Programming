//
//  iosAppApp.swift
//  Shared
//
//  Created by 장동현 on 2021/05/30.
//

import SwiftUI

@main
struct iosAppApp: App {
    var body: some Scene {
        DocumentGroup(newDocument: iosAppDocument()) { file in
            ContentView(document: file.$document)
        }
    }
}
