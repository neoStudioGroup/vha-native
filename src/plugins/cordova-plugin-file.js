const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof cordova.file != 'undefined') {
          Vue.prototype.$vha.file = {
            const: cordova.file,
            errorCode: {
              1: 'NOT_FOUND_ERR',
              2: 'SECURITY_ERR',
              3: 'ABORT_ERR',
              4: 'NOT_READABLE_ERR',
              5: 'ENCODING_ERR',
              6: 'NO_MODIFICATION_ALLOWED_ERR',
              7: 'INVALID_STATE_ERR',
              8: 'SYNTAX_ERR',
              9: 'INVALID_MODIFICATION_ERR',
              10: 'QUOTA_EXCEEDED_ERR',
              11: 'TYPE_MISMATCH_ERR',
              12: 'PATH_EXISTS_ERR'
            },
            getFreeDiskSpace: function () {
              return new Promise(function (resolve, reject) {
                cordova.exec(function (result) {
                  resolve(result)
                }, function (error) {
                  reject(error)
                }, 'File', 'getFreeDiskSpace', [])
              })
            },
            
            checkDir: function (path, dir) {
              return new Promise(function (resolve, reject) {
                if ((/^\//.test(dir))) {
                  reject('directory cannot start with \/')
                }
                try {
                  var directory = path + dir
                  window.resolveLocalFileSystemURL(directory, function (fileSystem) {
                    if (fileSystem.isDirectory === true) {
                      resolve(fileSystem)
                    } else {
                      reject({code: 13, message: 'input is not a directory'})
                    }
                  }, function (error) {
                    error.message = Vue.prototype.$vha.file.errorCode[error.code]
                    reject(error)
                  })
                } catch (err) {
                  err.message = Vue.prototype.$vha.file.errorCode[err.code]
                  reject(err)
                }
              })
            },
            
            checkFile: function (path, file) {
              return new Promise(function (resolve, reject) {
                if ((/^\//.test(file))) {
                  reject('directory cannot start with \/')
                }
                try {
                  var directory = path + file
                  window.resolveLocalFileSystemURL(directory, function (fileSystem) {
                    if (fileSystem.isFile === true) {
                      resolve(fileSystem)
                    } else {
                      reject({code: 13, message: 'input is not a file'})
                    }
                  }, function (error) {
                    error.message = Vue.prototype.$vha.file.errorCode[error.code]
                    reject(error)
                  })
                } catch (err) {
                  err.message = Vue.prototype.$vha.file.errorCode[err.code]
                  reject(err)
                }
              })
            },
            
            createDir: function (path, dirName, replaceBool) {
              return new Promise(function (resolve, reject) {
                if ((/^\//.test(dirName))) {
                  reject('directory cannot start with \/')
                }
                replaceBool = replaceBool ? false : true
                var options = {
                  create: true,
                  exclusive: replaceBool
                }
                try {
                  window.resolveLocalFileSystemURL(path, function (fileSystem) {
                    fileSystem.getDirectory(dirName, options, function (result) {
                      resolve(result)
                    }, function (error) {
                      error.message = Vue.prototype.$vha.file.errorCode[error.code]
                      reject(error)
                    })
                  }, function (err) {
                    err.message = Vue.prototype.$vha.file.errorCode[err.code]
                    reject(err)
                  })
                } catch (e) {
                  e.message = Vue.prototype.$vha.file.errorCode[e.code]
                  reject(e)
                }
              })
            },
            
            createFile: function (path, fileName, replaceBool) {
              return new Promise(function (resolve, reject) {
                if ((/^\//.test(fileName))) {
                  reject('file-name cannot start with \/')
                }
                replaceBool = replaceBool ? false : true
                var options = {
                  create: true,
                  exclusive: replaceBool
                }
                try {
                  window.resolveLocalFileSystemURL(path, function (fileSystem) {
                    fileSystem.getFile(fileName, options, function (result) {
                      resolve(result)
                    }, function (error) {
                      error.message = Vue.prototype.$vha.file.errorCode[error.code]
                      reject(error)
                    })
                  }, function (err) {
                    err.message = Vue.prototype.$vha.file.errorCode[err.code]
                    reject(err)
                  })
                } catch (e) {
                  e.message = Vue.prototype.$vha.file.errorCode[e.code]
                  reject(e)
                }
              })
            },
            
            removeDir: function (path, dirName) {
              return new Promise(function (resolve, reject) {
                if ((/^\//.test(dirName))) {
                  reject('file-name cannot start with \/')
                }
                try {
                  window.resolveLocalFileSystemURL(path, function (fileSystem) {
                    fileSystem.getDirectory(dirName, {create: false}, function (dirEntry) {
                      dirEntry.remove(function () {
                        resolve({success: true, fileRemoved: dirEntry})
                      }, function (error) {
                        error.message = Vue.prototype.$vha.file.errorCode[error.code]
                        reject(error)
                      })
                    }, function (err) {
                      err.message = Vue.prototype.$vha.file.errorCode[err.code]
                      reject(err)
                    })
                  }, function (er) {
                    er.message = Vue.prototype.$vha.file.errorCode[er.code]
                    reject(er)
                  })
                } catch (e) {
                  e.message = Vue.prototype.$vha.file.errorCode[e.code]
                  reject(e)
                }
              })
            },
            
            removeFile: function (path, fileName) {
              return new Promise(function (resolve, reject) {
                if ((/^\//.test(fileName))) {
                  reject('file-name cannot start with \/')
                }
                try {
                  window.resolveLocalFileSystemURL(path, function (fileSystem) {
                    fileSystem.getFile(fileName, {create: false}, function (fileEntry) {
                      fileEntry.remove(function () {
                        resolve({success: true, fileRemoved: fileEntry})
                      }, function (error) {
                        error.message = Vue.prototype.$vha.file.errorCode[error.code]
                        reject(error)
                      })
                    }, function (err) {
                      err.message = Vue.prototype.$vha.file.errorCode[err.code]
                      reject(err)
                    })
                  }, function (er) {
                    er.message = Vue.prototype.$vha.file.errorCode[er.code]
                    reject(er)
                  })
                } catch (e) {
                  e.message = Vue.prototype.$vha.file.errorCode[e.code]
                  reject(e)
                }
              })
            },
            
            removeRecursively: function (path, dirName) {
              return new Promise(function (resolve, reject) {
                if ((/^\//.test(dirName))) {
                  reject('file-name cannot start with \/')
                }
                try {
                  window.resolveLocalFileSystemURL(path, function (fileSystem) {
                    fileSystem.getDirectory(dirName, {create: false}, function (dirEntry) {
                      dirEntry.removeRecursively(function () {
                        resolve({success: true, fileRemoved: dirEntry})
                      }, function (error) {
                        error.message = Vue.prototype.$vha.file.errorCode[error.code]
                        reject(error)
                      })
                    }, function (err) {
                      err.message = Vue.prototype.$vha.file.errorCode[err.code]
                      reject(err)
                    })
                  }, function (er) {
                    er.message = Vue.prototype.$vha.file.errorCode[er.code]
                    reject(er)
                  })
                } catch (e) {
                  e.message = Vue.prototype.$vha.file.errorCode[e.code]
                  reject(e)
                }
              })
            },
            
            writeFile: function (path, fileName, text, replaceBool) {
              return new Promise(function (resolve, reject) {
                if ((/^\//.test(fileName))) {
                  reject('file-name cannot start with \/')
                }
                replaceBool = replaceBool ? false : true
                var options = {
                  create: true,
                  exclusive: replaceBool
                }
                try {
                  window.resolveLocalFileSystemURL(path, function (fileSystem) {
                    fileSystem.getFile(fileName, options, function (fileEntry) {
                      fileEntry.createWriter(function (writer) {
                        if (options.append === true) {
                          writer.seek(writer.length)
                        }
                        if (options.truncate) {
                          writer.truncate(options.truncate)
                        }
                        writer.onwriteend = function (evt) {
                          // if (Vue.prototype.$vha.file.errorCode) {
                          //   reject(Vue.prototype.$vha.file.errorCode)
                          // } else {
                            resolve(evt)
                          // }
                        }
                        writer.write(text)
                        promise.abort = function () {
                          writer.abort()
                        }
                      })
                    }, function (error) {
                      error.message = Vue.prototype.$vha.file.errorCode[error.code]
                      reject(error)
                    })
                  }, function (err) {
                    err.message = Vue.prototype.$vha.file.errorCode[err.code]
                    reject(err)
                  })
                } catch (e) {
                  e.message = Vue.prototype.$vha.file.errorCode[e.code]
                  reject(e)
                }
              })
            },
            
            writeExistingFile: function (path, fileName, text) {
              return new Promise(function (resolve, reject) {
                if ((/^\//.test(fileName))) {
                  reject('file-name cannot start with \/')
                }
                try {
                  window.resolveLocalFileSystemURL(path, function (fileSystem) {
                    fileSystem.getFile(fileName, {create: false}, function (fileEntry) {
                      fileEntry.createWriter(function (writer) {
                        writer.seek(writer.length)
                        writer.onwriteend = function (evt) {
                          // if (Vue.prototype.$vha.file.errorCode) {
                          //   reject(Vue.prototype.$vha.file.errorCode)
                          // } else {
                            resolve(evt)
                          // }
                        }
                        writer.write(text)
                        promise.abort = function () {
                          writer.abort()
                        }
                      })
                    }, function (error) {
                      error.message = Vue.prototype.$vha.file.errorCode[error.code]
                      reject(error)
                    })
                  }, function (err) {
                    err.message = Vue.prototype.$vha.file.errorCode[err.code]
                    reject(err)
                  })
                } catch (e) {
                  e.message = Vue.prototype.$vha.file.errorCode[e.code]
                  reject(e)
                }
              })
            },
            
            readAsText: function (path, file) {
              return new Promise(function (resolve, reject) {
                if ((/^\//.test(file))) {
                  reject('file-name cannot start with \/')
                }
                try {
                  window.resolveLocalFileSystemURL(path, function (fileSystem) {
                    fileSystem.getFile(file, {create: false}, function (fileEntry) {
                      fileEntry.file(function (fileData) {
                        var reader = new FileReader()
                        reader.onloadend = function (evt) {
                          if (evt.target.result !== undefined || evt.target.result !== null) {
                            resolve(evt.target.result)
                          } else if (evt.target.error !== undefined || evt.target.error !== null) {
                            reject(evt.target.error)
                          } else {
                            reject({code: null, message: 'READER_ONLOADEND_ERR'})
                          }
                        }
                        reader.readAsText(fileData)
                      })
                    }, function (error) {
                      error.message = Vue.prototype.$vha.file.errorCode[error.code]
                      reject(error)
                    })
                  }, function (err) {
                    err.message = Vue.prototype.$vha.file.errorCode[err.code]
                    reject(err)
                  })
                } catch (e) {
                  e.message = Vue.prototype.$vha.file.errorCode[e.code]
                  reject(e)
                }
              })
            },
            
            readAsDataURL: function (path, file) {
              return new Promise(function (resolve, reject) {
                if ((/^\//.test(file))) {
                  reject('file-name cannot start with \/')
                }
                try {
                  window.resolveLocalFileSystemURL(path, function (fileSystem) {
                    fileSystem.getFile(file, {create: false}, function (fileEntry) {
                      fileEntry.file(function (fileData) {
                        var reader = new FileReader()
                        reader.onloadend = function (evt) {
                          if (evt.target.result !== undefined || evt.target.result !== null) {
                            resolve(evt.target.result)
                          } else if (evt.target.error !== undefined || evt.target.error !== null) {
                            reject(evt.target.error)
                          } else {
                            reject({code: null, message: 'READER_ONLOADEND_ERR'})
                          }
                        }
                        reader.readAsDataURL(fileData)
                      })
                    }, function (error) {
                      error.message = Vue.prototype.$vha.file.errorCode[error.code]
                      reject(error)
                    })
                  }, function (err) {
                    err.message = Vue.prototype.$vha.file.errorCode[err.code]
                    reject(err)
                  })
                } catch (e) {
                  e.message = Vue.prototype.$vha.file.errorCode[e.code]
                  reject(e)
                }
              })
            },
            
            readAsBinaryString: function (path, file) {
              return new Promise(function (resolve, reject) {
                if ((/^\//.test(file))) {
                  reject('file-name cannot start with \/')
                }
                try {
                  window.resolveLocalFileSystemURL(path, function (fileSystem) {
                    fileSystem.getFile(file, {create: false}, function (fileEntry) {
                      fileEntry.file(function (fileData) {
                        var reader = new FileReader()
                        reader.onloadend = function (evt) {
                          if (evt.target.result !== undefined || evt.target.result !== null) {
                            resolve(evt.target.result)
                          } else if (evt.target.error !== undefined || evt.target.error !== null) {
                            reject(evt.target.error)
                          } else {
                            reject({code: null, message: 'READER_ONLOADEND_ERR'})
                          }
                        }
                        reader.readAsBinaryString(fileData)
                      })
                    }, function (error) {
                      error.message = Vue.prototype.$vha.file.errorCode[error.code]
                      reject(error)
                    })
                  }, function (err) {
                    err.message = Vue.prototype.$vha.file.errorCode[err.code]
                    reject(err)
                  })
                } catch (e) {
                  e.message = Vue.prototype.$vha.file.errorCode[e.code]
                  reject(e)
                }
              })
            },
            
            readAsArrayBuffer: function (path, file) {
              return new Promise(function (resolve, reject) {
                if ((/^\//.test(file))) {
                  reject('file-name cannot start with \/')
                }
                try {
                  window.resolveLocalFileSystemURL(path, function (fileSystem) {
                    fileSystem.getFile(file, {create: false}, function (fileEntry) {
                      fileEntry.file(function (fileData) {
                        var reader = new FileReader()
                        reader.onloadend = function (evt) {
                          if (evt.target.result !== undefined || evt.target.result !== null) {
                            resolve(evt.target.result)
                          } else if (evt.target.error !== undefined || evt.target.error !== null) {
                            reject(evt.target.error)
                          } else {
                            reject({code: null, message: 'READER_ONLOADEND_ERR'})
                          }
                        }
                        reader.readAsArrayBuffer(fileData)
                      })
                    }, function (error) {
                      error.message = Vue.prototype.$vha.file.errorCode[error.code]
                      reject(error)
                    })
                  }, function (err) {
                    err.message = Vue.prototype.$vha.file.errorCode[err.code]
                    reject(err)
                  })
                } catch (e) {
                  e.message = Vue.prototype.$vha.file.errorCode[e.code]
                  reject(e)
                }
              })
            },
            
            moveFile: function (path, fileName, newPath, newFileName) {
              return new Promise(function (resolve, reject) {
                newFileName = newFileName || fileName
                if ((/^\//.test(fileName)) || (/^\//.test(newFileName))) {
                  reject('file-name cannot start with \/')
                }
                try {
                  window.resolveLocalFileSystemURL(path, function (fileSystem) {
                    fileSystem.getFile(fileName, {create: false}, function (fileEntry) {
                      window.resolveLocalFileSystemURL(newPath, function (newFileEntry) {
                        fileEntry.moveTo(newFileEntry, newFileName, function (result) {
                          resolve(result)
                        }, function (error) {
                          reject(error)
                        })
                      }, function (err) {
                        reject(err)
                      })
                    }, function (err) {
                      reject(err)
                    })
                  }, function (er) {
                    reject(er)
                  })
                } catch (e) {
                  reject(e)
                }
              })
            },
            
            moveDir: function (path, dirName, newPath, newDirName) {
              return new Promise(function (resolve, reject) {
                newDirName = newDirName || dirName
                if (/^\//.test(dirName) || (/^\//.test(newDirName))) {
                  reject('file-name cannot start with \/')
                }
                try {
                  window.resolveLocalFileSystemURL(path, function (fileSystem) {
                    fileSystem.getDirectory(dirName, {create: false}, function (dirEntry) {
                      window.resolveLocalFileSystemURL(newPath, function (newDirEntry) {
                        dirEntry.moveTo(newDirEntry, newDirName, function (result) {
                          resolve(result)
                        }, function (error) {
                          reject(error)
                        })
                      }, function (erro) {
                        reject(erro)
                      })
                    }, function (err) {
                      reject(err)
                    })
                  }, function (er) {
                    reject(er)
                  })
                } catch (e) {
                  reject(e)
                }
              })
            },
            
            copyDir: function (path, dirName, newPath, newDirName) {
              return new Promise(function (resolve, reject) {
                newDirName = newDirName || dirName
                if (/^\//.test(dirName) || (/^\//.test(newDirName))) {
                  reject('file-name cannot start with \/')
                }
                try {
                  window.resolveLocalFileSystemURL(path, function (fileSystem) {
                    fileSystem.getDirectory(dirName, {create: false, exclusive: false}, function (dirEntry) {
                      window.resolveLocalFileSystemURL(newPath, function (newDirEntry) {
                        dirEntry.copyTo(newDirEntry, newDirName, function (result) {
                          resolve(result)
                        }, function (error) {
                          error.message = Vue.prototype.$vha.file.errorCode[error.code]
                          reject(error)
                        })
                      }, function (erro) {
                        erro.message = Vue.prototype.$vha.file.errorCode[erro.code]
                        reject(erro)
                      })
                    }, function (err) {
                      err.message = Vue.prototype.$vha.file.errorCode[err.code]
                      reject(err)
                    })
                  }, function (er) {
                    er.message = Vue.prototype.$vha.file.errorCode[er.code]
                    reject(er)
                  })
                } catch (e) {
                  e.message = Vue.prototype.$vha.file.errorCode[e.code]
                  reject(e)
                }
              })
            },
            
            copyFile: function (path, fileName, newPath, newFileName) {
              return new Promise(function (resolve, reject) {
                newFileName = newFileName || fileName
                if ((/^\//.test(fileName))) {
                  reject('file-name cannot start with \/')
                }
                try {
                  window.resolveLocalFileSystemURL(path, function (fileSystem) {
                    fileSystem.getFile(fileName, {create: false, exclusive: false}, function (fileEntry) {
                      window.resolveLocalFileSystemURL(newPath, function (newFileEntry) {
                        fileEntry.copyTo(newFileEntry, newFileName, function (result) {
                          resolve(result)
                        }, function (error) {
                          error.message = Vue.prototype.$vha.file.errorCode[error.code]
                          reject(error)
                        })
                      }, function (erro) {
                        erro.message = Vue.prototype.$vha.file.errorCode[erro.code]
                        reject(erro)
                      })
                    }, function (err) {
                      err.message = Vue.prototype.$vha.file.errorCode[err.code]
                      reject(err)
                    })
                  }, function (er) {
                    er.message = Vue.prototype.$vha.file.errorCode[er.code]
                    reject(er)
                  })
                } catch (e) {
                  e.message = Vue.prototype.$vha.file.errorCode[e.code]
                  reject(e)
                }
              })
            },
            
            readFileMetadata: function (path, file) {
              return new Promise(function (resolve, reject) {
                if ((/^\//.test(file))) {
                  reject('directory cannot start with \/')
                }
                try {
                  var directory = path + file
                  window.resolveLocalFileSystemURL(directory, function (fileEntry) {
                    fileEntry.file(function (result) {
                      resolve(result)
                    }, function (error) {
                      error.message = Vue.prototype.$vha.file.errorCode[error.code]
                      reject(error)
                    })
                  }, function (err) {
                    err.message = Vue.prototype.$vha.file.errorCode[err.code]
                    reject(err)
                  })
                } catch (e) {
                  e.message = Vue.prototype.$vha.file.errorCode[e.code]
                  reject(e)
                }
              })
            }
          }
        } else {
          throw "cordova-plugin-file undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha